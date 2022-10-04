// Code it 6.1
import {ask, loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const isAlice = await ask.ask(
    'Are you Alice? (y/n)',
    ask.yesno
);

const who = isAlice ? 'Alice' : 'Bob'
console.log(`Starting Fortune Telling as ${who}.`);

let acc = null;
const createAcc = await ask.ask(
    `Would you like to create an account? (Only possible on devnet)(y/n)`,
    ask.yesno
);

if (createAcc){
    const startingBalance = stdlib.parseCurrency(100);
    acc = await stdlib.newTestAccount(startingBalance);
}
else{
    const secret = await ask.ask(
        `What is your account secret?`,
        (x => x)
    )
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if(isAlice){
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    })
}
else{
    const info = await ask.ask(
        `Please paste the contract information here.`,
        JSON.parse
    )
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x,4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}.`);

const interact = {
    ...stdlib.hasRandom
};

interact.informTimeout = () => {
    console.log(`There was a timeout. (Someone took so long).`);
    process.exit(1);
};

if (isAlice) {
    const wager = await ask.ask(
        `How much do you want to wager?`,
        stdlib.parseCurrency
    );

    interact.wager = wager;
    interact.deadline = {ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];
}
else{
    interact.acceptWager = async (wager) => {
        const accepted = await ask.ask(
            `Do you want to accept the wager of ${fmt(wager)}? (y/n)`,
            ask.yesno
        );

        if(!accepted){
            process.exit(0);
        }
    }
}

const FORTUNE = ['50','100','150'];
interact.getFortune = async () => {
    const fortune = await ask.ask(
        `What fortune do you read? (50, 100, 150)`,
        (x) => {
            const fortune = x;

            if (FORTUNE.indexOf(fortune) < 0){
                throw Error (`Not a valid fortune ${fortune}.`)
            }
            
            return fortune;
        }
    )
    console.log(`You read fortune of ${fortune}.`);
    return fortune;
}

interact.getDecision = (fortune) => {
    const decision = ask.ask(
        `The fortune is ${fortune}. Do you accept the fortune? (y/n)`,
        ask.yesno
    );

    return decision;
}

interact.seeOutcome = async (decision, fortune) => {
    if(decision){
        console.log(`The fortune of ${fortune} is accepted.`);
    }
    else{
        console.log(`The fortune is ${fortune} rejected.`);
    }
}

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}.`);

ask.done();
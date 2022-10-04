// Code it 5.1
'reach 0.1'

const Player = {
    getFortune: Fun([], UInt),
    getDecision: Fun([UInt], Bool),
    seeOutcome: Fun([Bool, UInt], Null),
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Alice  = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    })

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    })

    init();

    const informTimeout = () => {
        each ([Alice, Bob], () => {
            interact.informTimeout();
        });
    };

    Alice.only(() => {
        const amount = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    })
    Alice.publish(amount, deadline)
        .pay(amount);
    commit();

    Bob.only(() => {
        interact.acceptWager(amount);
    })
    Bob.pay(amount)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    var decision = false;
    invariant(balance() == 2 * amount)
    while (decision == false){
        commit();

        Bob.only(() => {
            const fortuneBob = declassify(interact.getFortune());
        });

        Bob.publish(fortuneBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const decisionAlice = declassify(interact.getDecision(fortuneBob));
        });
        Alice.publish(decisionAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));

        each([Alice, Bob], () => {
            interact.seeOutcome(decisionAlice, fortuneBob);
        });

        decision = decisionAlice;
        continue
    };
    
    assert(decision == true);
    transfer(2 * amount).to(Bob);
    commit();
});
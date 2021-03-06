const Blockchain = require('../models/Blockchain')

const db = {
    blockchain: new Blockchain(),
    mempool: [],
    accounts: {
        "coinbase.cc": { 
                        id: 'coinbase',
                        coopCoin: 100000000000,
                        rollTokens: 1000000000,
                        nextNonce: 0,
                        publicKey: "043f978c2df524aaff3483b6b9d6c4f15234722d8afa286c94abe09a4a396d2353d56340fcd70bc8e59ee68e1a1504892960029da420fdfcde7f6eefc1f42cc5f2",
                    },
        "phyllis.cc": { id: 'phyllis',
                        coopCoin: 9999,
                        rollTokens: 10,
                        nextNonce: 0,
                        publicKey: "0460a4f22f857b80ad55bbe44450ac49aefbecae2bc1f1686660489c903c3907ffe38d94498208f31b76fae47d74cca4d56219ed3e8a2a8ad7ddff687d2f55d987",
                        blocksMined: 0,
                        tokensWon: 0,
                        coinsFromRolls: 0,
                    },
        "corbman.cc": { id: 'corbman',
                        coopCoin: 9999,
                        rollTokens: 10,
                        nextNonce: 0,
                        publicKey: "040b6f5311aab5a01c5d878d3887c17d85fee38b11ea4f223e2043daa2dc262e5fb6ac84f874903363650efe8a847d7969b5bd59539b189b4b8d92a58e60bb3fc2",
                        blocksMined: 0,
                        tokensWon: 0,
                        coinsFromRolls: 0,
                    },
        "grandersson.cc": { id: 'grandersson',
                            coopCoin: 9999,
                            rollTokens: 10,
                            nextNonce: 0,
                            publicKey: "042046d201a5ef769befb797a40af00356e16d52e27a57d1cbf5b815716d3f3c5f550511f12a20d6ca38185404fd95f01e892601ea7e7603213037040567e2496b",
                            blocksMined: 0,
                            tokensWon: 0,
                            coinsFromRolls: 0,
                    },
    },
    lastBlockTime: 0,
    lastBlockDifferential: 0,
    avgBlockTimes: [],
    blockReward: 1,
    targetDifficultyParams: { zeroes: 5, letter: 0},
    targetDifficulty: BigInt("0x00000" + "f".repeat(59)),
}

module.exports = db;
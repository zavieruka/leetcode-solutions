const MAX_DIGITS = 80;
const MODULO = 10 ** 9 + 7;

const binomial: number[][] = Array.from({ length: MAX_DIGITS }, () => Array(MAX_DIGITS).fill(0));
(function initializeBinomialCoefficients() {
    binomial[0][0] = 1;
    for (let n = 1; n < MAX_DIGITS; n++) {
        binomial[n][0] = 1;
        for (let k = 1; k <= n; k++) {
            binomial[n][k] = (binomial[n - 1][k] + binomial[n - 1][k - 1]) % MODULO;
        }
    }
})();

function countBalancedPermutations(numberStr: string): number {
    const digitCounts = Array(10).fill(0);
    let totalDigitSum = 0;
    for (const char of numberStr) {
        const digit = +char;
        digitCounts[digit]++;
        totalDigitSum += digit;
    }

    if (totalDigitSum % 2 !== 0) return 0;

    const totalDigits = numberStr.length;
    const memo: Record<string, number> = {};

    const dfs = (
        digit: number,
        remainingSum: number,
        leftDigits: number,
        rightDigits: number
    ): number => {
        if (digit > 9) return (remainingSum | leftDigits | rightDigits) === 0 ? 1 : 0;
        if (leftDigits === 0 && remainingSum > 0) return 0;

        const stateKey = `${digit},${remainingSum},${leftDigits},${rightDigits}`;
        if (stateKey in memo) return memo[stateKey];

        let totalWays = 0;
        for (let leftCount = 0; leftCount <= Math.min(digitCounts[digit], leftDigits); leftCount++) {
            const rightCount = digitCounts[digit] - leftCount;
            if (rightCount <= rightDigits && leftCount * digit <= remainingSum) {
                const combinations = Number(
                    (((BigInt(binomial[leftDigits][leftCount]) * BigInt(binomial[rightDigits][rightCount])) % BigInt(MODULO)) *
                        BigInt(dfs(
                            digit + 1,
                            remainingSum - leftCount * digit,
                            leftDigits - leftCount,
                            rightDigits - rightCount
                        ))) % BigInt(MODULO)
                );
                totalWays = (totalWays + combinations) % MODULO;
            }
        }

        memo[stateKey] = totalWays;
        return totalWays;
    };

    return dfs(0, totalDigitSum / 2, Math.floor(totalDigits / 2), Math.floor((totalDigits + 1) / 2));
}

export default function changeCoins(...figures) {
    return figures.reduce((total, current) => {
        return total + current;
    });
}



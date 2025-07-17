export const modThree = (binary) => {
    const S0 = 0;
    const S1 = 1;
    const S2 = 2;

    let state = S0;

    for (const bit of binary) {
        if (bit !== "0" && bit !== "1") {
            console.log(`Invalid input: ${bit}`);
            return;
        }
        switch (state) {
            case S0:
                state = bit === "0" ? S0 : S1;
                break;
            case S1:
                state = bit === "0" ? S2 : S0;
                break;
            case S2:
                state = bit === "0" ? S1 : S2;
                break;
        }
    }
    return state;
}

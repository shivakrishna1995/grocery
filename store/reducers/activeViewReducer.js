let initialState = {
    menuToggle: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "MENU_TOGGLE":
            return { ...state, menuToggle: !state.menuToggle }
        default:
            return initialState;
    }
}
export const getDataFromPreviousScreen = (navigation: any) => {
    const states: any = navigation.getState()
    return states.routes[states.routes.length - 1].params
}
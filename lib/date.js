export function getYearsSince(date){
    const today = new Date()
    let years = today.getFullYear() - date.getFullYear()

    const anniversaryPassed =
        today.getMonth() > date.getMonth() ||
        (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate())

    if (!anniversaryPassed) years--

    return years
}

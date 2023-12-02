export function load({ params }) {
    return {
        home: "Advent of Code",
        year: params.year,
        day: params.day,
    }
}
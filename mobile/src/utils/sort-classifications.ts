export function sortClassifications(results: Record<string, number>) {
    const sortedItems = Object.fromEntries(
        Object.entries(results).sort((a, b) => b[1] - a[1])
    );

    return sortedItems;
}
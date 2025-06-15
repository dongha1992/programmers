function solution(str1, str2) {
    const arr1 = splitToBigrams(str1);
    const arr2 = splitToBigrams(str2);

    if (arr1.length === 0 && arr2.length === 0) return 65536;

    const freqMap1 = createMap(arr1);
    const freqMap2 = createMap(arr2);

    let intersection = 0;
    let union = 0;
    const allKeys = new Set([...freqMap1.keys(), ...freqMap2.keys()]);

    allKeys.forEach(key => {
        const cnt1 = freqMap1.get(key) || 0;
        const cnt2 = freqMap2.get(key) || 0;
        intersection += Math.min(cnt1, cnt2);
        union += Math.max(cnt1, cnt2);
    });

    const jaccard = union === 0 ? 1 : intersection / union;
    return Math.floor(jaccard * 65536);
}

function splitToBigrams(str) {
    const upper = str.toUpperCase();
    const bigrams = [];
    
    for (let i = 0; i < upper.length - 1; i++) {
        const chunk = upper.slice(i, i + 2);
        if (/^[A-Z]{2}$/.test(chunk)) {
            bigrams.push(chunk);
        }
    }
    return bigrams;
}

function createMap(arr) {
    return arr.reduce((map, key) => 
        map.set(key, (map.get(key) || 0) + 1), new Map());
}
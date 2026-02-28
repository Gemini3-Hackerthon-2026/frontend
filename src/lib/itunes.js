export async function getAlbumArt(artist, title) {
    try {
        const query = encodeURIComponent(`${artist} ${title}`);
        const response = await fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=1`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            // 100x100 이미지를 600x600 고화질로 변환
            return data.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
        }
        return null; // 이미지가 없을 경우
    } catch (error) {
        return null;
    }
}
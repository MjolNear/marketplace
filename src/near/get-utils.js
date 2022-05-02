export class NftAPI {

    static async getJsonByURL(url) {
        try {
            const response = await fetch(url, {timeout: 30000});
            if (!response.ok) {
                return {error: response.statusText + ' (' + response.status + ')'}
            }
            try {
                return await response.json();
            } catch (err) {
                return {error: 'Unable to parse json response'}
            }
        } catch (error) {
            return {error}
        }
    }
}
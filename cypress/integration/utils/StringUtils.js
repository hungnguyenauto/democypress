class StringUtils {

    static generateHashString () {
        return Math.random().toString(36).substring(7);
    }

    static normalizeText(String) {
        return String.replace(/\s/g, '').toLowerCase();

    }

    static simplifyText(text) {
        return text.replace(/\s/g, '_').replace(/[^a-zA-Z0-9 ]/g, '_').toLowerCase();
    }
}

export default StringUtils;


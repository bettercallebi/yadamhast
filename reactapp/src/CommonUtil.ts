import fa from './dictionary/fa.json';

class CommonUtil {

    private _currentUser: any;

    get language(): string {
        let languageInput = localStorage.getItem('language');
        return languageInput ? languageInput : 'fa';
    }

    setLanguage(language: string) {
        localStorage.setItem("language", language);
    }

    get direction(): string {
        let language = localStorage.getItem('direction');
        return language ? language : 'rtl';
    }

    setDirection(direction: string) {
        localStorage.setItem("direction", direction);
    }

    get mediaWidth(): string {
        let mediaWidth = localStorage.getItem('mediaWidth');
        return mediaWidth ? mediaWidth : 'xl';
    }

    setMediaWidth(mediaWidth: string) {
        localStorage.setItem("mediaWidth", mediaWidth);
    }

    get theme(): string {
        let theme = localStorage.getItem('theme');
        return theme ? theme : 'grey';
    }

    setTheme(theme: string) {
        localStorage.setItem("theme", theme);
    }

    get jwtToken(): string | null {
        return localStorage.getItem('token');
    }

    setJwtToken(token: string) {
        localStorage.setItem('token', token);
    }

    get glogin(): string | null {
        return localStorage.getItem('glogin');
    }

    setGlogin(glogin: string) {
        localStorage.setItem('glogin', glogin);
    }

    get currentUser(): any {
        return this._currentUser;
    }

    set currentUser(value: any) {
        this._currentUser = value;
    }

    get responsive(): boolean {
        return 'xs,sm,md'.indexOf(this.mediaWidth) !== -1;
    }

    getBundle(): any {
        let bundle: any;
        switch (this.language) {
            case 'fa':
                bundle = fa;
                break;
        }
        return bundle;
    }

    getPhrase(key: string, params: string[] = []): string {
        let phrase = this.getBundle()[key];
        if (!phrase) {
            return '[...]';
        }
        if (params && params.length > 0) {
            phrase = this.replace(phrase, params);
        }
        return phrase;
    }

    replace(s: string, params: any[] = []) {
        let result = s;
        if (params && params.length > 0) {
            for (let i = 0; i < params.length; i++) {
                result = result.replace(`{${i}}`, params[0]);
            }
        }
        return result;
    }

    isEmpty(v: any) {
        return !v || v.length === 0;
    }

    sublist(parentList: any, itemNames: string[]) {
        let childList = {} as any;
        itemNames.forEach(itemName => {
            childList[itemName] = parentList[itemName];
        });
        return childList;
    }

    redirect(url: string) {
        window.location.hash = url;
        window.location.reload();
    }

    reload() {
        window.location.reload();
    }

    back() {
        window.history.back();
    }
}

export default new CommonUtil();

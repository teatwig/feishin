export const isLegacyAuth = () =>
    window.LEGACY_AUTHENTICATION === true || window.LEGACY_AUTHENTICATION === 'true';

export const isServerLock = () => window.SERVER_LOCK === true || window.SERVER_LOCK === 'true';

export const isReverseProxyAuth = () => window.REVERSE_PROXY_AUTH === true || window.REVERSE_PROXY_AUTH === 'true';

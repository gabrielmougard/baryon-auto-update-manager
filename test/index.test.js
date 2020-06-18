let AutoUpdateManager = require('../');
const assert = require('assert');
const electronVersion = require('electron/package.json').version;

describe('baryon-auto-update-manager', () => {
    it('should have an export', () => {
        assert(AutoUpdateManager);
    });
    it('should require an arg to the constructor', () => {
        assert.throws(() => new AutoUpdateManager());
    });
    it('should setup', () => {
        const endpoint = 'https://baryon-endpoint.bebhop.com';
        const autoUpdateManager = new AutoUpdateManager(endpoint, null, 'mixer', 'stable', 'linux');
        assert.equal(autoUpdateManager.version, electronVersion);
        assert.equal(autoUpdateManager.feedURL,
        `https://baryon-endpoint.bebhop.com/api/v2/update/mixer/stable/linux/${electronVersion}`);
    });
});
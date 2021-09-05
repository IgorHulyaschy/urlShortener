const shortid = require('shortid');
const config = require('config');
const db = require('../database/database.connection');
const { Url } = require('./model/Url');

class UrlService {
  static async findAll(longUrl) {
    try {
      const result = await db.query(`
        SELECT *
        FROM url_data
        WHERE long_url = '${longUrl}'
      `);

      return new Url(result.rows[0]).getShortUrl();
    } catch {
      return false;
    }
  }

  static async addUrl(longUrl) {
    const urlCode = shortid.generate();
    const shortUrl = `${config.get('server.baseUrl')}/${urlCode}`;
    const result = await db.query(`
      INSERT INTO "url_data"
      (url_code, long_url, short_url) VALUES
      ('${urlCode}', '${longUrl}', '${shortUrl}')
      RETURNING *
    `);
    return new Url(result.rows[0]).getShortUrl();
  }

  static async findByShortUrl(url) {
    const resLongUrl = await db.query(`
      SELECT long_url
      FROM url_data
      WHERE url_code = '${url}'
    `);
    return new Url(resLongUrl.rows[0]).getUrl();
  }
}

module.exports = { UrlService };

class Url {
  constructor(db) {
    this.id = db.id;
    this.urlCode = db.url_code;
    this.longUrl = db.long_url;
    this.shortUrl = db.short_url;
  }

  getShortUrl() {
    const responseData = {
      shortUrl: this.shortUrl,
    };
    return responseData;
  }

  getUrl() {
    const responseData = {
      longUrl: this.longUrl,
    };
    return responseData;
  }
}
module.exports = { Url };

/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.2
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Class to storage authentication data
 */
export class AuthStorage {
  private storage: Map<string, string>;

  constructor() {
    this.storage = new Map();
  }

  /**
   * Sets the api_key auth method value.
   *
   * @param value The new value to set for api_key.
   */
  setapi_key(value: string): this {
    this.storage.set('api_key', value);
    return this;
  }

  /**
   * Removes the api_key auth method value.
   */
  removeapi_key(): this {
    this.storage.delete('api_key');
    return this;
  }

  /**
   * Gets the api_key auth method value.
   */
  getapi_key(): null | string {
    return this.storage.get('api_key') || null;
  }

  /**
   * Sets the petstore_auth auth method value.
   *
   * @param value The new value to set for petstore_auth.
   */
  setpetstore_auth(value: string): this {
    this.storage.set('petstore_auth', value);
    return this;
  }

  /**
   * Removes the petstore_auth auth method value.
   */
  removepetstore_auth(): this {
    this.storage.delete('petstore_auth');
    return this;
  }

  /**
   * Gets the petstore_auth auth method value.
   */
  getpetstore_auth(): null | string {
    return this.storage.get('petstore_auth') || null;
  }
}
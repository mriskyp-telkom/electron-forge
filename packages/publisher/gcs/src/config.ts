export interface PublisherGCSConfig {
  /**
   * The file path to the .json file that contains your Google service account credentials
   * or .pem  or .p12 file that contains private key
   *
   * Falls back to the GOOGLE_APPLICATION_CREDENTIALS environment variable if not provided
   */
  keyFilename?: string;
  /**
   * Google Cloud project ID
   *
   * Falls back to the GOOGLE_CLOUD_PROJECT environment variable if not provided
   * */
  projectId?: string,
  /**
   * The email of your Google service account, required when using a .pem or .p12 keyFilename
   *
   * Falls back to the GOOGLE_CLOUD_CLIENT_EMAIL environment variable if not provided
   */
  clientEmail?: string;
  /**
   * The private key of your Google service account
   *
   * Falls back to the GOOGLE_CLOUD_PRIVATE_KEY environment variable if not provided
   */
  privateKey?: string;
  /**
   * The name of the Google Cloud Storage bucket to upload artifacts to
   */
  bucket?: string;
  /**
   * The key prefix to upload artifacts to.
   *
   * E.g. `my/prefix`
   *
   * Default: appVersion
   */
  folder?: string;
  /**
   * Whether or not to make uploaded artifacts public to the internet
   *
   * Default: false
   */
  public?: boolean;
  /**
   * Custom function to provide the key to upload a given file to
   */
  keyResolver?: (fileName: string, platform: string, arch: string) => string;
}
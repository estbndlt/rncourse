# Node Version

- v18.16.1

## Troubleshooting

### Bundler.js Error (found in section 5 starting point)

If the following error occurs:

```bash
node_modules/metro/src/Bundler.js:58:29 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

Run the following command in the terminal where the project is:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

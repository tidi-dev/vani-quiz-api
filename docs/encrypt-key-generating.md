# ENCRYPT_KEY Generating

This `ENCRYPT_KEY` is different from each local machines and only be genereted once.

Open the terminal and execute the command below

```bash
# generate encrypt secret
openssl rand -hex 16
```

Copy and Paste the value into `.env` file

# ENCRYPT_IV Generating

This `ENCRYPT_IV` is different from each local machines and only be genereted once.

Open the terminal and execute the command below

```bash
# generate encrypt iv
openssl rand -hex 16
```

Copy and Paste the value into `.env` file

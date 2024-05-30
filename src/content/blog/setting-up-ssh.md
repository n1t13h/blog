---
title: Setting Up SSH
description: This is a guide to setting up SSH
pubDate: May 30 2024
heroImage: https://try.direct/files/3c1b7d22-4f03-4fa9-8b8a-2df7e02c90bd.png
---

## Generating an SSH key

If you do not have an existing `.ssh` directory on your computer, you can generate a new SSH key pair using the following steps:

- Make sure that SSH is installed on your system
- Open your terminal or command prompt
- Type the following command to generate a new SSH Key pair
```bash
ssh-keygen -t ed25519 -C "email"
```
Replace "email" with your email address
- Follow the prompts to save the key pair to the default location (`~/.ssh/id_ed25519`), or specify a different location if desired.
- Optionally you can also pass -f to mention the filename
```shell
ssh-keygen -f ~/atat-key-ecdsa -t ecdsa -b 521
```
- You should now have a ssh key generated in your .ssh folder.

## Setting up your Machine

### Generating an RSA SSH Key
To generate an RSA SSH Key, you can use the ssh-keygen command with the following options:

```bash
ssh-keygen -t rsa -b 4096 -f .ssh/name_of_your_key
```
This will generate  an ew RSA SSH key pair with a key length of 4096 bits and save the private key to the file .ssh/name_of_your_key in your home directory.

### Copying the public key to a remote server
To copy the public key to a remote server, you can use the `scp` command with the following options: 
```bash
scp -P 1122 .ssh/name_of_your_key.pub username@ip:~/name_of_your_key.pub
```
This will copy the public key file `.ssh/name_of_your_key.pub` to the remote server at IP address `IP`, using the ssh port `1122` and save it as `name_of_your_key.pub` in the home directory of the `username` user.

You can hen use the private key file `name_of_your_key` on your local machine to authenticate within the remote server using SSH.

### Adding the public key to the authorized keys file
After copying the public key to the remote server, you need to add it to the authorized keys file to enable SSH authentication using the new key. Here are the steps to do this:
1. Open a SSH session to the remote server using your existing SSH credentials.
2. Append the contents of the public key file to the authorized keys file using the following command:
```bash
cat ~/name_of_your_key.pub >> ~/.ssh/authorized_keys
```
This will add the public key to the end of the authorized keys file.

3. Set the correct permissions on the authorized keys file using the following command:
```bash
chmod 600 ~/.ssh/authorized_keys
```
 This will restrict access to the authorized keys file to the owner of the file only.
 
 4. Remove the public key file from the remote server using the following command:
```bash
 rm ~/name_of_your_key.pub
```
This will delete the public key file from the remote server, as it is no longer needed.

You can now use the private key file `name_of_your_key` on your local machine to authenticate with the remote server using SSH.

### Connecting to the remote server using ssh
To connect to the remote server using SSH with your newly generate key, you can use the following command:
```bash
ssh -i .ssh/name_of_your_key -p 22 root@IP
```
This will start an SSH session to the remote server at IP address, using the private key file .ssh/name_of_your_key for authenticate and SSH port 22

By default the ssh port is at 22 so -p is only required if ssh is configured on a different port.

Make sure to replace root with the appropriate username if you are not logging in as the root user on the remote server.

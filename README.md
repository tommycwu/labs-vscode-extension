![Auth0 Open Source Software](https://cdn.auth0.com/resources/oss-source-large-2x.png)

# Auth0 VSCode Extension (Experimental)

A Visual Studio Code extension that provides a rich IDE experience for setting up your Auth0 integration, and deploying changes to your Auth0 account.

> Note: This extension is currently in an experimental state and is not supported by Auth0. It has not had a complete security review, and we do not recommend using it to interact with production tenants.

## Requirements

You'll need an Auth0 account. If you do not already have one, you can create a free one [here](https://auth0.com/signup)

## Instalation

This Visual Studio Code extension is not yet published to the Extensions Marketplace. In order to install this extension, you must run `code --install-extension release.vsix` and close/open Visual Studio Code.

Complete commands:

```
git clone https://github.com/auth0/vscode-extension.git
cd vscode-extension
npm install
vsce package
code --install-extension release.vsix
```

## Uninstall
To remove the extension, run `code --uninstall-extension release.vsix`

## Contributing
To start contributing new features to the Auth0 VS Code extension, you can develop and debug the application locally. 

```
git clone https://github.com/auth0/vscode-extension.git
cd vscode-extension
npm install
```

Under the Debug Tab in Visual Studio Code, select `Run Extension`.
![Debug Run Extension](media/debug-run-extension.png)


## Quick Start

### Authenticating

The first thing to do is connect to your Auth0 account.

<div align="center">
  <a href="https://auth0-1.wistia.com/medias/djjvi6h7ht">
 <img 
  src="https://cdn.auth0.com/website/hackathon/21/vscode-extension/install-cover-2.png" 
  alt="Authentication" 
  style="width:100%;">
  </a>
</div>


You can also log out, or switch your selected tenant

<div align="center">
  <a href="https://auth0-1.wistia.com/medias/dr73hybglz">
 <img 
  src="https://cdn.auth0.com/website/hackathon/21/vscode-extension/logout-switch-tenant.png" 
  alt="Authentication" 
  style="width:100%;">
  </a>
</div>

### Managing Auth0 Resources

From within VSCode, you can now:

View your Applications and APIs, and also see or copy their pertinent details into your code

<div align="center">
  <a href="https://auth0-1.wistia.com/medias/ht4bd62rvx">
 <img 
  src="https://cdn.auth0.com/website/hackathon/21/vscode-extension/view-lists.png" 
  alt="Authentication" 
  style="width:100%;">
  </a>
</div>

Create or Update Applications, including setting up your applications to use a local callback URL for development purposes

<div align="center">
  <a href="https://auth0-1.wistia.com/medias/lyvhjrat86">
 <img 
  src="https://cdn.auth0.com/website/hackathon/21/vscode-extension/add-update-application.png" 
  alt="Authentication" 
  style="width:100%;">
  </a>
</div>

### Advanced Auth0 Resource Updates

You can also take advantage of our `yaml` configuration integration to make more complex changes to your Auth0 resources, then deploy them right from within VSCode.

<div align="center">
  <a href="https://auth0-1.wistia.com/medias/yx9li5sz1i">
 <img 
  src="https://cdn.auth0.com/website/hackathon/21/vscode-extension/auth0-yml-deploy.png" 
  alt="Authentication" 
  style="width:100%;">
  </a>
</div>

## Contributing

Please check the [contributing guidelines](CONTRIBUTING.md).

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://auth0.com/docs/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional [username/password databases](https://auth0.com/docs/connections/database/custom-db).
* Add support for [linking different user accounts](https://auth0.com/docs/link-accounts) with the same user.
* Support for generating signed [JSON Web Tokens](https://auth0.com/docs/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when, and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://auth0.com/docs/rules/current).

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

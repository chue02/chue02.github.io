<h2 align="center">
  <a href="https://chue02.github.io/" target="_blank"> Eric Chu's Personal Website</a>
</h2>
<h2 align="center">
   (Fork of <a href="https://brittanychiang.com" target="_blank"> brittanychiang.com - v4)</a>
</h2>

<p align="center">
  Built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted on <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>
</p>

## 🚨 Repo source

Forked from my older brother's repo, [lambertchu.com](https://lambertchu.com), which was forked from [brittanychiang.com.](https://brittanychiang.com) As per my brother's request, if you fork off this repo please link back his and Brittany Chiang's websites. Thanks!

## 🛠 Installation & Set Up

### NOTE: This set-up is dated and may need to be modified.

You may need to switch nvm version 16 _before_ installing `gatsby-cli` as issues may arise if you are not on the correct nvm version for installation. In essence, you may need to swaps steps 1 and 2.

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use Node v16 using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install 16

   nvm use 16
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   yarn start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🌐 Deployment on GitHub Pages

The website my brother created is hosted on AWS, however I chose to deploy my website using GitHub Pages. Typically, GitHub Pages wants you to create an `index.html` file as its entry point for deployment. However, you may notice there does not exist such a file in this repo. This is because this website is built on various `.js` files, and creating an `index.html` file to run many `.js` scripts would be convoluted.

[Gatsby provided a tutorial on how to host on GitHub Pages.](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/) This tutorial provides several different instructions depending on how you use GitHub Pages. I followed the instructions regarding **_GitHub Pages subdomain at github.io_** (i.e. `username.github.io`) with these modifications:

1. Installing `gh-pages`

Because we are using an old version of nvm, when you run `npm install gh-pages --save-dev` you may need to add the flag `--legacy-peer-deps` at the end of the command. In other words, if you encounter the error

```sh
Fix the upstream dependency conflict, or retry this command with --force, or --legacy-peer-deps to accept an incorrect (and potentially broken) dependency resolution.
```

one potential solution is to run:

```sh
npm install gh-pages --save-dev --legacy-peer-deps
```

You should not need to switch nvm versions. I do _not_ recommend using the flag `--force` as this many cause other unexpected errors down the road. **If you know a better solution than the one I provided, please let me know in the comment section of this repository!**

2. New branches

You may also notice I have two branches: `main` and `dev`. This is because Gatsby's instructions specify to use one branch strictly for deployment and another branch strictly for development. The instructions used `main` for deployment and created another branch called `source` for development, but I felt it was more intuitive to name the development branch `dev` instead of `source`. The insturctions also specified to set your development branch as the default branch, hence why the default branch is `dev` and not `main`.

If you want to **build** your website for development and testing, switch to the `dev` branch and use the commands:

```sh
npm run build
npm run serve
```

However, if you want to **deploy** your website for publishing, use the command:

```sh
npm run deploy
```

You should run this command in the `dev` branch, and when you do it'll automatically merge any changes you made to the `main` branch and deploy the website from there. It's important you ensure you have backed up the last version of the website _before_ you run this command. That's what GitHub's for, after all!

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#07011F](https://via.placeholder.com/10/07011F?text=+) `#07011F` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/07011F?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

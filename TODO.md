# General

- [x] Figure out how to deploy website
- [ ] Change favicon
- [x] **Create another blog category page**, this one for creative
  - [x] Name one category `Opinions` and the other `Analytics`
  - [x] Do this in `src/pages`
  - [x] Add page in header via `src/config.js`
  - [ ] Create test blogs to see if it works
  - [ ] Create another category for football weekly updates?
- [x] Remove license

# Content

- [x] Remove content in folders (i.e. jobs/posts/projects)
- [x] Add another directory for new blog section I plan on adding
  - **Note:** If you add/modify/delete a new page that requires you to add to the `/content/type` directory, make sure you specify it in the `gatsby-config.js` file.

# Src

## Components

- [ ] Update `social.js`
  - Add resume?
- [ ] Update `picture.js` to fix resolution issue

## Pages

- [ ] Update `index.js` to reflect new changes to website's structure

### Courses

- [ ] Add courses page
  - [ ] Should I use the same structure as the "jobs" section with this?
- [ ] Divide courses by subject? One list of courses per subject
  - [ ] List per courses taken in math, CS/stats, and film?
- [ ] What should I do with skills? Should I make it its own page or add it to the courses page?
  - [ ] Should I name this page "courses" or "skills"?

### Analytics

- [ ] Add quote as subtitle
- [ ] Create test blog (perhaps old article I've written on GitHub?)

### Opinions

- [ ] Add quote as subtitle
- [ ] Create test blog (perhaps my Giants quarterly review)

## config.js

- [ ] Figure out way to add resume

# Sections

## About Me

- [ ] Fix TODOs there
- [ ] Update images
  - [ ] Figure out why my image won't render (Resolution issue)
- [x] Shorten the section
- [x] Remove blog previews & projects sections

## Jobs

- [x] Update "where I've worked" section
- [x] Figure out why it's not aligned with other sections
  - Solution: adjust `max-width` in `jobs.js` to be the same as `max-width` in other corresponding seciton `.js` files
    - This won't break on mobile... right?

## Projects

- [x] Rename to "portfolio"
  - More appropriate name than projects as things I may put here may include things like publications, coding projects, short films, etc.
- [x] Add categories to each entry in my portfolio

## Contact

- [x] Remove Twitter link
  - [ ] and maybe Instagram
- [ ] Add email (?)
- [ ] Attach resume (not sure if I should do that here though)

# README.md

- [x] Add new instructions for deployment on GitHub Pages
  - [x] Specify differences between `npm run build` and `npm run deploy`
    - [x] And the significane between dev and main branches

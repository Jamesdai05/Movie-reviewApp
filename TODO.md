# Fix Plan - Movie Review App

## Step 1: Fix FATAL localStorage crash (BLOCKING)
- [ ] Remove `react-dotenv` script tag from `public/index.html`
- [ ] Remove `react-dotenv` from `package.json` scripts and dependencies
- [ ] Delete `public/env.js`

## Step 2: Fix ESLint Warnings
- [ ] `src/App.js` - Remove unused `movies` state variable
- [ ] `src/pages/Popular.jsx` - Remove unused `token`, `loading`, `error` variables
- [ ] `src/components/Genre.jsx` - Fix useEffect missing dependency (`makeApiCall`)
- [ ] `src/components/components/SearchPage/SearchBar.jsx` - Fix useEffect infinite loop and missing dependency

## Step 3: Code Quality Fixes
- [ ] `src/components/MovieCard.jsx` - Fix `voteAverage.length` bug (number has no .length)
- [ ] Remove duplicate component files (`src/components/components/Home.jsx`, `src/components/components/Popular.jsx`, `src/components/components/Favourite.jsx`, `src/components/components/Trending.jsx`)

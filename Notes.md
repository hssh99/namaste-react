# Commands:

- npm i -D parcel
- npx parcel index.html
- npx parcel build index.html - for prod build

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## Episode - 03

- npm run start -> shorhand: npm start (only works for start)

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
-      - RestaurantCard
-          - Img
-          - Name of res, star rating, cuisine, delievery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

## Episode - 04

- Q. why key is required while looping?
- if we dont specify the key and if new element is added in between
  then react wont know that which element is added. it will re-render
  the all elements.
- But if we provide the id, then react knows which element to render
- Q. why index should not be used as key ?
- React assumes the item at that index is the same, even if the data has changed. This can cause unnecessary re-renders or missed updates.

## Episode - 05: Let's Get Hooked

- why react?
- it makes dev experience easy.
- Best Practise: Never keep hardcoded data in the component file.
- named export and default export: if we want to export multiple things, we use named export.

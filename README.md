# Simple switch component
---
## Layout
1. we have two components inside and *article* and a *section* tag
2. these tags are inside an div **#root**. this #root have and display flex, in desktop screens the `flex-direction:row`, otherwise in mobile screens `flex-direction:column-reverse`.
3. we use media queryes to change layout between mobile or desktop
4. inside components, they have your only styles who changes for differents screens too.
---
### code operation
1. In react, we have only two components **text** and **slider**
2. text have a text items, like a paragraph (comment) and the name and job of that who commented, inside the component, the text (commentary) is inside two variables, one with one comment and another with another comment.
3. slider houses an image and one div with two arrow images who actives a function called **change**, this function changes the value of an state passed for components by props called *state*:
* if `props.state?` return an image and one comment, else, return different ones
#ractive-paginator

An easy to use Ractive component that handles pagination.

### Demo

[Live Demo](http://jondum.github.com/ractive-paginator/demo/)

### Install

```
npm install ractive-paginator --save
```

### Usage

Add the component to your Ractive instance:

```
Ractive.extend({
    ...
    components: {
        paginator: require('ractive-paginator')
    },
    ...
});
```

Use it

```
<paginator items='{{things}}'>
    <div class='thing'>
        {{.}}
    </div>
</paginator>
```

The content inside the `<paginator>` take is what gets iterated just like an `{{#each}}` loop. The context is each item passed into `items`.

Includes minimal styling under the class `.ractive-paginator`. Styles are included in the javascript and added to the page on load.

### API

##### Properties

`items`: Array of Objects where each key is a column

`perpage`: How many items to display per page

`page`: the current page

`total`: the current page

`lastPage` (readonly): the last page or total number of pages

##### Methods


`previousPage`: Go to the previous page

`nextPage`: Go to the next page





Open to PRs and stuff. I'm around.



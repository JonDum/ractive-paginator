
require('!!style!css!stylus!./styles.styl');

module.exports = Ractive.extend({

    template: require('!!raw!./template.html'),

    data: function() {
        return {
            perpage: 30,
            page: 1,
        }
    },

    computed: {

        // _items is internal, set items externally
        _items: function() {

            var page = this.get('page') - 1;
            var items = this.get('items');
            var perpage = parseInt(this.get('perpage'), 10);
            var total = this.get('total');

            return items.slice(page * perpage, Math.min(page * perpage + perpage, total));

        },

        lastPage: function() {
            var total = this.get('total');
            var perpage = parseInt(this.get('perpage'), 10);

            return Math.ceil(total / perpage);
        },

        onFirstPage: function() {
            return this.get('page') == 1;
        },

        onLastPage: function() {

            var page = this.get('page');
            var lastPage = this.get('lastPage');

            return page == lastPage;
        },

        current: function() {

            var items = this.get('items');

            if(items.length === 0)
                return 0;

            var page = this.get('page');
            var perpage = parseInt(this.get('perpage'), 10);
            var total = this.get('total');
            var ppp = (page - 1) * perpage;
            return (page === 1 ? 1 : ppp) + '-' + Math.min(ppp + perpage, total)
        },

        total: function() {
            var items = this.get('items');
            return items ? items.length : 0;
        },

        pages: function() {

            var total = this.get('total');
            var page = this.get('page');
            var perpage = parseInt(this.get('perpage'), 10);

            var onFirstPage = this.get('onFirstPage');
            var lastPage = this.get('lastPage');

            if(perpage > total)
                return null;

            var ret = [];

            var n = Math.min(lastPage, 7);
            var p = page > lastPage - 4 ? lastPage - n : Math.max(page - 4, 0);
            var c = p + n;
            while(p++ < c)
                ret.push(p);

            //first page
            if(page > n) {
                ret[0] = 1;
            }

            // last page
            if(p < lastPage - 4)
                ret[ret.length - 1] = lastPage;

            return ret;
        }
    },

    previousPage: function() {
        this.set('page', Math.max(this.get('page') - 1, 1));
    },

    nextPage: function() {
        this.set('page', Math.min(this.get('page') + 1, this.get('lastPage')));
    },

    gotoPage: function(page) {
        this.set('page', page);
    },

    oninit: function() {

        var self = this;
        // reset page when perpage changes
        self.observe('perpage filter', function() {
            self.set('page', 1);
        });

    }

})

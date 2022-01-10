private onPageChanged(event: any): void {
        this.eventsLog.current!.style.display = 'block';
        const loggedElements = document.getElementsByClassName('logged');
        if (loggedElements.length >= 5) {
            this.myPanel.current!.clearcontent();
        }
        const args = event.args;
        const eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';
        this.myPanel.current!.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        const paginginformation = this.myGrid.current!.getpaginginformation();
        this.pagingInfo.current!.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
    }
    private onPageSizeChanged(event: any): void {
        this.eventsLog.current!.style.display = 'block';
        this.myPanel.current!.clearcontent();
        const args = event.args;
        const eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';
        this.myPanel.current!.prepend('<div style="margin-top: 5px">' + eventData + '</div>');
        // get page information.
        const paginginformation = this.myGrid.current!.getpaginginformation();
        this.pagingInfo.current!.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
    }


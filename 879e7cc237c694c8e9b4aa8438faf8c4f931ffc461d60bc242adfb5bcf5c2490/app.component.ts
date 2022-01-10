source: any =
    {
        localData:
        [
            { state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
            { state: 'new', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
            { state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
            { state: 'new', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
            { state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
        ],
        dataType: 'array',
        dataFields: this.fields
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
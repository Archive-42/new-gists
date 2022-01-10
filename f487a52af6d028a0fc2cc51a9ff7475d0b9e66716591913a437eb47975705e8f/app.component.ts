ngAfterViewInit(): void
{
    this.mainSplitter.createComponent(this.mainSplitterSettings);
    this.rightSplitter.createComponent(this.rightSplitterSettings);
    this.kanbanOne.createComponent(this.kanbanOneSettings);
    this.kanbanTwo.createComponent(this.kanbanTwoSettings);
}
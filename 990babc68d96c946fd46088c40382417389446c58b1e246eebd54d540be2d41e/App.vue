<JqxSplitter
	:width="'100%'" :height="'100%'"
     :panels="[{ size: 200 }, { size: 200}]">
     <div>
     		Left Panel
     </div>
     <div>
         <JqxTabs class="jqx-hideborder jqx-hidescrollbars"
                        :width="'100%'" :height="'100%'">
             <ul>
                 <li style="margin-left: 30px;">Tab 1</li>
                 <li>Tab 2</li>
             </ul>
             <div>
                Content 1
             </div>
             <div>
                Content 2
             </div>
         </JqxTabs>
    </div>
</JqxSplitter>

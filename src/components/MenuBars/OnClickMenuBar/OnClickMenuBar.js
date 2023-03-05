import './OnClickMenuBar.css';

const OnClickMenuBar = (props) => {
    let menuitems = props.items;
    let tempitems = ['Share', 'Add to PlayList', 'Add to Queue', 'Download', 'View Lyrics', 'Get Songs Info', 'View Album'];
    return (
        <div id="contextMenu" class="context-menu"> 
            <ul class="menu"> 
                <li class="share"><a href="#"><i class="fa fa-share" aria-hidden="true"></i> Share</a></li> 
                <li class="rename"><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Rename</a></li> 
                <li class="link"><a href="#"><i class="fa fa-link" aria-hidden="true"></i> Copy Link Address</a></li> 
                <li class="copy"><a href="#"><i class="fa fa-copy" aria-hidden="true"></i> Copy to</a></li> 
                <li class="paste"><a href="#"><i class="fa fa-paste" aria-hidden="true"></i> Move to</a></li> 
                <li class="download"><a href="#"><i class="fa fa-download" aria-hidden="true"></i> Download</a></li> 
                <li class="trash"><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></li> 
            </ul> 
        </div> 
    );
}

export default OnClickMenuBar;
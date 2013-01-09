<div id="sliderWrap">
    <div id="openCloseIdentifier"></div>
    <div id="slider">
        <div id="sliderContent">
            
			<form action="core/upload.php" method="POST" enctype="multipart/form-data" onsubmit="return form_validation(this)">
				<table>
				<tr>
					<td><?php s('title'); ?></td>
					<td><input type="text" name="title" id="form_title"></td>
					<td><?php s('user'); ?></td>
					<td><input type="text" name="user" id="form_user"></td>
				</tr>
				<tr>
					<td><?php s('desc'); ?></td>
					<td><input type="text" name="description" id="form_description"></td>
					<td><?php s('cat'); ?></td>
					<td><input type="text" name="cat" id="form_cat"></td>
				</tr>
				<tr>
					<td><?php s('image'); ?></td>
					<td><input type="file" name="image" id="form_image"></td>
					<td colspan="2">
						<label>
							<input type="checkbox" name="hotlink" value="true" checked/><?php s('allow_hotlink'); ?>
						</label>
					</td>
				</tr>
				<tr>
					<td colspan="4"><input type="submit" value="&#x21E7; <?php s('up'); ?>" style="width:100%"></td>
				</table>
			</form>

        </div>
        <div id="openCloseWrap">
            <a href="#" class="topMenuAction" id="topMenuImage">
                <img src="images/upload_open.png" alt="open" />
            </a>
        </div>
    </div>
</div>
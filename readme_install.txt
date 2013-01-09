1) Run this query
Replace XXX with the name of the table (whathever you want : you can use letters, numbers and underscores, but no space or special character ; i.e. : images, my_pictures, files001, etc.)

CREATE TABLE `XXX` (
  `id` int(11) NOT NULL auto_increment,
  `title` text character set latin1 NOT NULL,
  `description` text character set latin1 NOT NULL,
  `image` longblob NOT NULL,
  `add_date` datetime NOT NULL,
  `extension` varchar(5) character set latin1 NOT NULL,
  `height` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `hotlink` tinyint(4) NOT NULL default '1',
  `category` varchar(255) NOT NULL default 'General',
  `user` varchar(50) NOT NULL default 'Anonymous',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

2) Edit core/config.inc.php

3) Upload to your server & enjoy.
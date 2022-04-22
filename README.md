# PiHole-blockpage

##How to

`nano /etc/pihole/pihole-FTL.conf
BLOCKINGMODE=IP`

`nano /etc/lighttpd/lighttpd.conf`
Change the thing with 404 from `index.php` to `block.html`

`/etc/init.d/lighttpd restart`

Put the block.html here: `/var/www/html/pihole/`

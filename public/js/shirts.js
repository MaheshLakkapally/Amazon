(function(dust){dust.register("shirts",body_0);function body_0(chk,ctx){return chk.w("<div class=\"sorting\" style=\"color: #880F67;text-align:right;size: 150px\"><a href=\"#\" onclick=\"loadPage('sortPrice')\">Price:Low to High</a><br><a href=\"#\" onclick=\"loadPage('sortPrice')\">Price:High to Low</a><br><p>Search:</p><select name=\"sorting\" id=\"sorting\"><option value=\"0\"></option><option href=\"#\" onclick=\"loadPage('sortPrice')\">Price: Low to High </option><option value=\"2\"> Price: High to Low </option><option value=\"3\"> Reset </option></select></div><div id=\"list\"><h2 style=\"text-align: center;color:#C03434\">Today's Best Deals</h2><ol>").s(ctx.getPath(false, ["list","shirts"]),ctx,{"block":body_1},{}).w("</ol></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"container\"><div class=\"row\"><div class=\"col-md-4\"></div></div><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"></div><div class=\"col-md-3\"></div></div></div><ul><li style=\"color: red\"><b>").f(ctx.get(["name"], false),ctx,"h").w("</b></li><br><a href=\"#\" onclick=\"loadPage('shirtdetails?id=").f(ctx.get(["id"], false),ctx,"h").w("')\"><img src=\"").f(ctx.get(["url1"], false),ctx,"h").w("\" height=\"400\" width=\"400\"></img></a><br><ul style=\"color:#C03434\"><li><b><p>Price:").f(ctx.get(["rate"], false),ctx,"h").w("</p></b></li><li><b><p>Type:").f(ctx.get(["type"], false),ctx,"h").w("</p></b></li><li><b><p>Size:").f(ctx.get(["size"], false),ctx,"h").w("</p></b></li></ul></ul>");}body_1.__dustBody=!0;return body_0}(dust));
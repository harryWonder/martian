/**
 * This is the default email template for sending emails to users || customers in Mars.
 * 
 * @author Ilori Stephen A <stephen.ilori@itscopesolutions.com>
 * @return {String}
 * @name Welcome
 * @param {Object} Payload
 * 
*/

module.exports = (Payload) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width"/>
    
        <style type="text/css">
        * { margin: 0; padding: 0; font-size: 100%; font-family: 'Avenir Next', "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif; line-height: 1.65; }
        
        h3 { font-size: 24px; }
        
        h4 { font-size: 20px; }
        
        h5 { font-size: 16px; }
        
        p, ul, ol { font-size: 16px; font-weight: normal; margin-bottom: 20px; }
        
        .container { display: block !important; clear: both !important; margin: 0 auto !important; max-width: 580px !important; }
        
        .container table { width: 100% !important; border-collapse: collapse; }
        
        img { max-width: 100%; margin: 0 auto; display: block; }
        
        body, .body-wrap { width: 100% !important; height: 100%; background: #f8f8f8; }
        
        a { color: #FF512F; text-decoration: none; }
        
        a:hover { text-decoration: underline; }
        
        .text-center { text-align: center; }
        
        .text-right { text-align: right; }
        
        .text-left { text-align: left; }
        
        .button { display: inline-block; color: white; background: #FF512F; border: solid #FF512F; border-width: 10px 20px 8px; font-weight: bold; border-radius: 4px; }
        
        .button:hover { text-decoration: none; }
        
        h1, h2, h3, h4, h5, h6 { margin-bottom: 20px; line-height: 1.25; }
        
        h1 { font-size: 32px; }
        
        h2 { font-size: 28px; }
        
        h3 { font-size: 24px; }
        
        h4 { font-size: 20px; }
        
        h5 { font-size: 16px; }
        
        p, ul, ol { font-size: 16px; font-weight: normal; margin-bottom: 20px; }
        
        .container { display: block !important; clear: both !important; margin: 0 auto !important; max-width: 580px !important; }
        
        .container table { width: 100% !important; border-collapse: collapse; }
        
        .container .masthead { padding: 80px 0; background: #FF512F; color: white; }
        
        .container .masthead h1 { margin: 0 auto !important; max-width: 90%; text-transform: uppercase; }
        
        .container .content { background: white; padding: 30px 35px; }
        
        .container .content.footer { background: none; }
        
        .container .content.fo
        
        h3 { font-size: 24px; }
        
        h4 { font-size: 20px; }
        
        h5 { font-size: 16px; }
        
        p, ul, ol { font-size: 16px; font-weight: normal; margin-bottom: 20px; }
        
        .container { display: block !important; clear: both !important; margin: 0 auto !important; max-width: 580px !important; }
        
        .container table { width: 100% !important; border-collapse: collapse; }
        oter p { margin-bottom: 0; color: #888; text-align: center; font-size: 14px; }
        
        .container .content.footer a { color: #888; text-decoration: none; font-weight: bold; }
        
        .container .content.footer a:hover { text-decoration: underline; }
        
        </style>
        <title>Welcome | ${Payload.appName}</title>
    </head>
    <body>
    <table class="body-wrap">
        <tr>
            <td class="container">
    
                <!-- Message start -->
                <table>
                    <tr>
                        <td align="center" class="masthead">
                          <h2>${Payload.appName}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td class="content">
                          <h2>Hi there! </h2>
                          <p class="greeting">
                            Howdy Stranger! You don't look like you are from around here. Any way I can help?
                          </p>
                          <table>
                              <tr>
                                <td align="center">
                                  <a class="button" href="javascript:void(0)">Need Help?</a>
                                </td>
                              </tr>
                          </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="container">
    
                <!-- Message start -->
                <table>
                    <tr>
                        <td class="content footer" align="center">
                          <p>Sent by <a href="http://${Payload.appUrl}">${Payload.appName}</a>, No 79 Martian Avenue</p>
                          <p><a href="mailto:${Payload.from}">${Payload.from}</a></p>
                        </td>
                    </tr>
                </table>
    
            </td>
        </tr>
    </table>
    </body>
    </html>`;
}
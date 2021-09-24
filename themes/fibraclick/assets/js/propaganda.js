window.propaganda = {
    template: `
<div class="propaganda">
    <div class="propaganda-header"></span></div>

    <div class="propaganda-text">
        <span class="propaganda-title">Non perderti le novità.</span><br>
        Iscriviti a <strong>Riflessione ottica</strong>, la newsletter settimanale di FibraClick. <strong>Ogni domenica le principali novità sulla banda ultra larga e Internet in Italia, spiegate in 5 minuti.</strong> Niente spam, promesso.
        
        <div id="mc_embed_signup">
          <form action="https://click.us20.list-manage.com/subscribe/post?u=43e7f0aa512956e35c8d37395&amp;id=8d73a21b79&amp;SIGNUP=propaganda&amp;WIKIURL={url}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Il tuo indirizzo email..." required>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_43e7f0aa512956e35c8d37395_8d73a21b79" tabindex="-1" value=""></div>
              <input type="submit" value="ISCRIVITI" name="subscribe" id="mc-embedded-subscribe">
              <label for="newsletter-signup-privacy" id="newsletter-signup-privacy-label" style="display:block;padding-top:10px">
                <input type="checkbox" required id="newsletter-signup-privacy" />
                Accetto l'<a href="https://fibra.click/privacy.pdf" target="_blank">informativa sulla privacy.</a>
            </label>
          </form>
        </div>

        <!--Seguici anche su <a target="_blank" href="https://t.me/FibraClick">Telegram</a>, <a target="_blank" href="https://www.facebook.com/fibraclick">Facebook</a> e <a target="_blank" href="https://twitter.com/fibraclick">Twitter</a>.-->
    </div>
</div>
`,

    ad: `
<div class="propaganda" style="margin-top:1.5rem">
    <div class="propaganda-header">Una piccola interruzione. <span>L'articolo prosegue sotto ↓</span></div>
        <ins class="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-7028530372547989"
            data-ad-slot="7331718272"></ins>
    </div>
</div>`,

    init: function() {
        window.onload = window.propaganda.onLoad;
    },

    onLoad: function () {
        var ctaNode = document.getElementsByClassName('post-footer')[0];
        if (ctaNode) {
            var url = encodeURIComponent(location.href);
            var html = window.propaganda.template.replace('{url}', url);
            ctaNode.insertAdjacentHTML('beforebegin', html);
        }

        var adNode = document.querySelectorAll('h2')[0];
        if (adNode) {
            adNode.insertAdjacentHTML('beforebegin', window.propaganda.ad);
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    },
};

window.propaganda.init();

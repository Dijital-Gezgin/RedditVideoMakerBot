# Narlıdere E-İmar Playwright Betiği

İzmir Narlıdere Belediyesi [E-İmar](https://keos.narlidere-bld.gov.tr/imardurumu/index.aspx) sisteminden Ada/Parsel sorgusu yapar; detay panelindeki T.A.K.S, K.A.K.S, Plan Fonksiyon, Bina Yüksekliği gibi alanları terminale yazar.

## Kurulum

```bash
pip install -r requirements-imar.txt
playwright install chromium
```

## Kullanım

```bash
# Varsayılan: Limanreis / Ada 122 / Parsel 198
python narlidere_imar_sorgula.py

# Özel sorgu
python narlidere_imar_sorgula.py --mahalle Limanreis --ada 122 --parsel 198

# Tarayıcıyı görünür aç
python narlidere_imar_sorgula.py --headed
```

## İş akışı

1. E-İmar ana sayfasını açar
2. **Ada/Parsel** sekmesine geçer
3. Mahalle alanı görünürse seçer; ada/parseli `122/198` formatında doldurur
4. Ara’ya basar, sonuçtan ilgili parseli seçer
5. **İmar Durumu** detay sayfasına geçer
6. TAKS / KAKS / Fonksiyon / Yükseklik vb. alanları yazdırır

Not: Servis endpoint’i `X-Service-Nonce` çerez başlığı bekler; betik bunu otomatik ekler.

# Dosya Kontrol Ajanım

## Görevin
/articles klasöründeki her .txt dosyasını kontrol et.

## Neye bakacaksın
Geçerli bir dosya şu satırla başlar: Title:
İlk satır "Title:" ile başlamıyorsa, dosyanın başlığı eksik demektir.

Geçerli bir dosya ayrıca 5 satırdan uzun içerik içerir.
Bir dosya 5 satır veya daha kısaysa, başlık kontrolünün yanında "çok kısa" olarak da işaretle.

## Ne yapacaksın
1. /articles içindeki her .txt dosyasını tek tek oku.
2. Hangi dosyaların başlığı eksik not al.
3. Hangi dosyaların çok kısa olduğunu not al (5 satır veya daha az).
4. Ana klasörde missing-titles.txt adında bir dosya oluştur.
5. Sorunlu her dosya adını bir satıra yaz; birden fazla sorun varsa " — " ile ayır (örnek: post-two.txt — çok kısa).
6. Tüm dosyalar geçerliyse, missing-titles.txt içine "Tüm dosyaların başlığı var." yaz.

## Yapmayacakların
Hiçbir makale dosyasını düzenleme. Sadece oku. Sadece missing-titles.txt dosyasına yaz.

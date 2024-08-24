public class Task1Ref {
    public static void main(String[] args){
        // Р”Р°РЅ РјР°СЃСЃРёРІ РґРІРѕРёС‡РЅС‹С… С‡РёСЃРµР», РЅР°РїСЂРёРјРµСЂ [1,1,0,1,1,1],
        // РІС‹РІРµСЃС‚Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ РїРѕРґСЂСЏРґ РёРґСѓС‰РёС… 1.
        int[] arr = {1,1,0,1,1,1,1};
        int counter = 0;
        int maxValue = 0;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] == 1){
                counter++;
            }
            else
            {
                if(counter > maxValue){
                    maxValue = counter;
                    counter = 0;
                }
            }
        }
        if(counter > maxValue){
            maxValue = counter;
        }
        System.out.println(maxValue);
    }
}
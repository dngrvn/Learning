package org.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.offset;


import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.assertj.core.api.Assertions.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

class CartTest
{

    public static List<Product> getStoreItems()   // Создаем набор продуктов для магазина:
    {
        List<Product> products = new ArrayList<>();

        String[] productNames = {"bacon", "beef", "ham", "salmon", "carrot", "potato", "onion", "apple", "melon", "rice", "eggs", "yogurt"};
        Double[] productPrice = {170.00d, 250.00d, 200.00d, 150.00d, 15.00d, 30.00d, 20.00d, 59.00d, 88.00d, 100.00d, 80.00d, 55.00d};
        Integer[] stock = {10, 10, 10, 10, 10, 10, 10, 70, 13, 30, 40, 60};

        for (int i = 0; i < productNames.length; i++)
        {
            products.add(new Product(i + 1, productNames[i], productPrice[i], stock[i]));
        }
        return products;
    }
        // тоже самое
        // Product product = new Product(1,"bacon", 170.00d, 10);
        // products.add(product);



     private ByteArrayOutputStream output = new ByteArrayOutputStream();
     private Shop shop;
     private Cart cart;
     private  List<Product> products = new ArrayList<>();

      @BeforeEach
      void setup()
      {
          shop = new Shop(getStoreItems());
          cart = new Cart(shop);
      }


/*
            ID | Название  | Цена, р. | Кол-во в магазине, шт.
            1  | bacon     | 170.0    | 10
            2  | beef      | 250.0    | 10
            3  | ham       | 200.0    | 10
            4  | salmon    | 150.0    | 10
            5  | carrot    | 15.0     | 10
            6  | potato    | 30.0     | 10
            7  | onion     | 20.0     | 10
            8  | apple     | 59.0     | 70
            9  | melon     | 88.0     | 13
            10 | rice      | 100.0    | 30
            11 | eggs      | 80.0     | 40
            12 | yogurt    | 55.0     | 60
*/

    /** 1 тест для проверки общей стоимости корзины с разными товарами */
    @Test
    void priceCartIsCorrectCalculated()
    {
        // наполнение корзины разными товарами с разной стоимостью
        cart.addProductToCartByID(1);    // 170 +
        cart.addProductToCartByID(5);   // 10 +
        cart.addProductToCartByID(12); // 60 +

        assertThat(cart.getTotalPrice()).isEqualTo(170 + 10 + 60); //todo:  сам тест
    }

    /** 2 тест для проверки общей стоимости корзины с множественными экземплярами одного и того же продукта */
    @Test
    void priceCartProductsSameTypeIsCorrectCalculated()
    {
        for (int i = 0; i < 3; i++)
        {
            cart.addProductToCartByID(8);    // 59 * 3 = 210
        }
        assertThat(cart.getTotalPrice()).isEqualTo(59 + 59 + 59);
        assertEquals(59*3, cart.getTotalPrice(), 0.0001);
    }

    /** 3 тест для проверки удаления товара из корзины, что при этом происходит перерасчет общей стоимости корзины */
    @Test
    void whenChangingCartCostRecalculationIsCalled()
    {
        // 3.1
        cart.addProductToCartByID(1);     // 170 +
        cart.addProductToCartByID(5);    // 15 +
        cart.addProductToCartByID(12);  // 55 +

        cart.removeProductByID(5);    // 15 -

        assertEquals(170 + 15 + 55 - 15, cart.getTotalPrice(), 0.0001);

        assertThat(cart.getTotalPrice()).isEqualTo(170 + 15 + 55 - 15); // из практики

        // 3.2
        double finalPrice = cart.getTotalPrice();

        for (Product product: products)
        {
            if(product.getId() == 5)
            {
                double removeProduct = product.getPrice();
                assertThat(finalPrice).isEqualTo(finalPrice - removeProduct);
                break;
            }
        }
    }

    /**
     * 4 тест для проверки, что при добавлении определенного количества товара в корзину,
         общее количество этого товара в магазине соответствующим образом уменьшается */

    @Test
    void quantityProductsStoreChanging()
    {

        int innitialQuantity5 = shop.getProductsShop().get(4).getQuantity(); // количество товара 5 до добавление в корзину
        int innitialQuantity12 = shop.getProductsShop().get(11).getQuantity(); // количество товара 12 до добавление в корзину
        int summInnitialQuantity = innitialQuantity5 + innitialQuantity12; // общее количество товара 5 и 12 до добавления их в корзину

        cart.addProductToCartByID(5); // добавление в корзину товара 5
        cart.addProductToCartByID(12); // добавление в корзину товара 12
        
        int ultimateQuantity5 = shop.getProductsShop().get(4).getQuantity();  // количество товара 5 после добавление в корзину
        int ultimateQuantity12 = shop.getProductsShop().get(11).getQuantity(); // количество товара 12 после добавление в корзину
        int summUltimateQuantity = ultimateQuantity5 + ultimateQuantity12; // общее количество товара 5 и 12 после добавления их в корзину


        assertThat(summInnitialQuantity - summUltimateQuantity).isEqualTo(2); // сам тест (уменшение на  2 товара)
    }

    /** 5 тест для проверки, что если пользователь забирает все имеющиеся продукты
          определенного типа из магазина, эти продукты больше не доступны для заказа */

    @Test
    void lastProductsDisappearFromStore() 
    {
        for (int i = 0; i < shop.getProductsShop().get(1).getQuantity(); i++)
        {
                cart.addProductToCartByID(1);
        }
       System.setOut(new PrintStream(output));
       cart.addProductToCartByID(1);

       assertThat(output.toString().trim()).isEqualTo("Этого товара нет в наличии"); // сам тест
    }

    /**
     * 2.6. Напишите модульный тест для проверки, что при удалении товара из корзины,
     * общее количество этого товара в магазине соответствующим образом увеличивается.
     * <br><b>Ожидаемый результат:</b>
     * Количество продуктов этого типа на складе увеличивается на число удаленных из корзины продуктов
     */

    @Test
    void deletedProductIsReturnedToShop()
    {
        int innitialQuantity5 = shop.getProductsShop().get(4).getQuantity();
        cart.addProductToCartByID(5);
        int middleQuantity5 = shop.getProductsShop().get(4).getQuantity();
        cart.removeProductByID(5);
        int ultimateQuantity5 = shop.getProductsShop().get(4).getQuantity();
        assertThat(ultimateQuantity5 -middleQuantity5).isEqualTo(1);

    }

    /** 7  тест для проверки, что при вводе неверного идентификатора товара генерируется исключение RuntimeException */
    @ParameterizedTest
    @ValueSource(ints = {13, -1})
    void incorrectProductSelectionCausesException(int i)
    {
        assertThatThrownBy(()-> cart.addProductToCartByID(i)).isInstanceOf(RuntimeException.class);
    }

    /** 8 тест для проверки, что при попытке удалить из корзины больше товаров, чем там есть, генерируется исключение RuntimeException */
    @Test
    void incorrectProductRemoveCausesException()
    {
        assertThatThrownBy(() -> cart.removeProductByID(1)).isInstanceOf(Exception.class);
    }


    /** 9 Нужно восстановить тест */
    // boolean Сломанный-Тест() {
    //          // Assert (Проверка утверждения)
    //          assertThat(cart.getTotalPrice()).isEqualTo(cart.getTotalPrice());
    //          // Act (Выполнение)
    //          cart.addProductToCartByID(2); // 250
    //          cart.addProductToCartByID(2); // 250
    //          // Arrange (Подготовка)
    //          Shop shop = new Shop(getStoreItems());
    //          Cart cart = new Cart(shop);
    //      }

    @Test
    void testSUM() {

    }

    /**
     * 2.10. Нужно оптимизировать тестовый метод, согласно следующим условиям:
     * <br> 1. Отображаемое имя - "Advanced test for calculating TotalPrice"
     * <br> 2. Тест повторяется 10 раз
     * <br> 3. Установлен таймаут на выполнение теста 70 Миллисекунд (unit = TimeUnit.MILLISECONDS)
     * <br> 4. После проверки работоспособности теста, его нужно выключить
     */

    // ...
}
<?php

namespace Tests\Feature\Products;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    private const API_PATH = '/api/products/';

//    public function setUp(): void
//    {
//        parent::setUp();
//        $this->artisan('db:seed');
//    }

    public function test_products_can_be_indexed()
    {
        $response = $this->get(self::API_PATH);

        $response->assertStatus(200);
    }

    public function test_product_can_be_shown()
    {
        $product = Product::factory()->create();

        $response =$this->get(self::API_PATH . $product->getKey());

        $response->assertStatus(200);
    }

    public function test_product_can_be_stored()
    {
        $attributes = [
            'sku' => 'Test sku',
            'name' => 'Test name',
            'price' => 12345,
        ];

        $response =$this->post(self::API_PATH, $attributes);

        $response->assertStatus(201);

        $this->assertDatabaseHas('products', $attributes);
    }

    public function test_product_can_be_updated()
    {
        $product = Product::factory()->create();

        $attributes = [
            'sku' => 'New sku',
            'name' => 'New name',
            'price' => 5555,
        ];

        $response = $this->put(self::API_PATH . $product->getKey(), $attributes);

        $response->assertStatus(202);

        $this->assertDatabaseHas('products', array_merge(['id' => $product->getKey()], $attributes));
    }

    public function test_product_can_be_destroyed()
    {
        $product = Product::factory()->create();

        $response = $this->delete(self::API_PATH . $product->getKey());

        $response->assertStatus(204);

        $this->assertDatabaseMissing('products', ['id'=>$product->getKey()]);
    }
}

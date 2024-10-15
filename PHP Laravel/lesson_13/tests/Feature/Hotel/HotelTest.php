<?php

namespace Tests\Feature\Hotel;

use App\Models\Hotel;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HotelTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed');
    }

    public function test_hotel_index()
    {
        $response = $this->get('/api/hotel');

        $response->assertStatus(200);
    }

    public function test_hotel_can_be_show()
    {
        $hotel = Hotel::factory()->create();

        $response = $this->get('/api/hotel/' . $hotel->getKey());

        $response->assertStatus(200);
    }

    public function test_hotel_can_be_created()
    {
        $attributes = [
            'name' => 'Test hotel',
            'address' => 'Test address',
        ];

        $response = $this->post('/api/hotel', $attributes);

        $response->assertStatus(201);

        $this->assertDatabaseHas('hotels', $attributes);
    }

    public function test_hotel_can_be_updated()
    {
        $hotel = Hotel::factory()->create();

        $attributes = [
            'name' => 'New name',
            'address' => 'New address',
        ];

        $response = $this->put('/api/hotel/' . $hotel->getKey(), $attributes);

        $response->assertStatus(202);

        $this->assertDatabaseHas('hotels', array_merge(['id' => $hotel->getKey()], $attributes));
    }

    public function test_hotel_can_be_deleted()
    {
        $hotel = Hotel::factory()->create();

        $response = $this->delete('/api/hotel/' . $hotel->getKey());

        $response->assertStatus(204);

        $this->assertDatabaseMissing('hotels', ['id'=>$hotel->getKey()]);
    }
}

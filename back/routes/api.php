
<?

use Illuminate\Support\Facades\Route;
Route::get('/hello', function () {
    return ['message' => 'Salut depuis Laravel'];
});

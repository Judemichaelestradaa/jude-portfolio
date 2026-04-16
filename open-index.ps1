$target = Join-Path $PSScriptRoot 'index.html'
if (Test-Path $target) {
    Start-Process $target
} else {
    Write-Error "File not found: $target"
}

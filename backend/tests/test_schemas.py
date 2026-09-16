from pydantic import ValidationError
import pytest

from app.schemas import RegistrationCreate


def test_registration_payload_is_valid():
    item = RegistrationCreate(
        name="Jane Doe",
        email="jane@example.com",
        phone="+2348000000000",
        programme="DevOps Engineering",
        message="Interested in Batch 06.",
    )
    assert item.email == "jane@example.com"


def test_registration_requires_valid_email():
    with pytest.raises(ValidationError):
        RegistrationCreate(name="Jane Doe", email="not-an-email", programme="DevOps Engineering")
